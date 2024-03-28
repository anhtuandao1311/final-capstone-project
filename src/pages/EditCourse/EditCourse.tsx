import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'

import { Input } from '~/components/ui/input'

import { Button } from '~/components/ui/button'
import { Fragment, useState } from 'react'
import set from 'lodash/set'
import FileInput from '~/components/FileInput'
import { useMutation } from '@tanstack/react-query'
import courseApi from '~/apis/course.api'
import { create, omit } from 'lodash'
import { toast } from 'react-toastify'
const sectionsSample = [
  {
    name: 'Introduction to Programming',
    courseId: 30,
    lessons: [
      {
        name: 'Variables and Data Types',
        video_path: 'https://example.com/variables-video'
      },
      {
        name: 'Control Flow and Loops',
        video_path: 'https://example.com/control-flow-video'
      }
      // Add more lessons here...
    ],
    quiz: {
      question: 'What is the capital of France?',
      first_choice: 'Paris',
      second_choice: 'Madrid',
      third_choice: 'Berlin',
      fourth_choice: 'Rome',
      correct_choice: 'first_choice'
    }
  },
  {
    name: 'Web Development Basics',
    courseId: 30,
    lessons: [
      {
        name: 'HTML and CSS Fundamentals',
        video_path: 'https://example.com/html-css-video'
      },
      {
        name: 'JavaScript Basics',
        video_path: 'https://example.com/javascript-video'
      }
      // Add more lessons here...
    ],
    quiz: {
      question: 'Which programming language is used for web development?',
      first_choice: 'Java',
      second_choice: 'Python',
      third_choice: 'JavaScript',
      fourth_choice: 'C++',
      correct_choice: 'second_choice'
    }
  }
  // Add more sections here...
]

export default function EditCourse() {
  const [sections, setSections] = useState(sectionsSample)

  const handleAddLesson = (sectionId: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].lessons.push({
        name: 'New Lesson',
        video_path: ''
      })
      return newSections
    })
  }

  const handleAddQuiz = (sectionId: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].quiz = {
        question: 'New Question',
        first_choice: 'First Choice',
        second_choice: 'Second Choice',
        third_choice: 'Third Choice',
        fourth_choice: 'Fourth Choice',
        correct_choice: 'first_choice'
      }
      return newSections
    })
  }

  const handleChangeSectionName = (sectionId: number, name: string) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].name = name
      return newSections
    })
  }

  const handleChangeLessonName = (sectionId: number, lessonIndex: number, name: string) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].lessons[lessonIndex].name = name
      return newSections
    })
  }

  const handleChangeQuizQuestion = (sectionId: number, question: string) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].quiz.question = question
      return newSections
    })
  }

  const handleChangeQuizAnswers = (
    sectionId: number,
    answerOrder: 'first_choice' | 'second_choice' | 'third_choice' | 'fourth_choice' | 'correct_choice',
    answer: string
  ) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].quiz[answerOrder] = answer
      return newSections
    })
  }

  const handleDeleteSection = (sectionId: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections.splice(sectionId, 1)
      return newSections
    })
  }

  const handleDeleteLesson = (sectionId: number, lessonIndex: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].lessons.splice(lessonIndex, 1)
      return newSections
    })
  }

  const handleDeleteQuiz = (sectionId: number) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].quiz = null as any
      return newSections
    })
  }

  const handleAddSection = () => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections.push({
        name: 'New Section',
        lessons: [
          {
            name: 'New Lesson',
            video_path: ''
          }
        ],
        quiz: null as any,
        courseId: 123
      })
      return newSections
    })
  }

  const handleFileChange = (sectionId: number, lessonId: number, file?: File) => {
    setSections((prevSections) => {
      const newSections = [...prevSections]
      newSections[sectionId].lessons[lessonId].file = file
      return newSections
    })
  }

  console.log('sections', sections)

  const handleUploadFileCloudinary = async (file: File) => {
    let url = ''
    const formBodyData = new FormData()

    formBodyData.append('file', file)
    formBodyData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_PRESET}`)

    await fetch(`${process.env.REACT_APP_CLOUDINARY_URL}`, {
      method: 'POST',
      body: formBodyData
    })
      .then((res) => res.json())
      .then((data) => {
        url = data.secure_url
      })
      .catch((error) => {
        console.error('Error:', error)
      })
    return url
  }

  const createSectionsMutation = useMutation({
    mutationFn: courseApi.createSections
  })

  const handleSubmit = async () => {
    for (const section of sections) {
      if (section.lessons) {
        for (const lesson of section.lessons) {
          if (lesson.file) {
            const videoPath = await handleUploadFileCloudinary(lesson.file)
            lesson.video_path = videoPath
            omit(lesson, 'file')
          }
        }
      }
      createSectionsMutation.mutate(section, {
        onSuccess: () => {
          toast.success('Course curriculum updated successfully', { autoClose: 2000 })
        },
        onError: (error) => {
          toast.error('Failed to update course curriculum', { autoClose: 2000 })
          console.error('Error:', error)
        }
      })
    }
  }

  return (
    <div className='bg-slate-100 py-16 px-8 ml-[260px] pt-28 min-h-screen'>
      <div className='bg-white p-6'>
        <h1 className='font-bold text-2xl text-center mb-6'>Course Curriculum</h1>
        <hr className='mb-6' />
        {sections.map((section, sectionIndex) => (
          <div className='mb-10 p-6 bg-slate-100'>
            <div className='flex items-center justify-between gap-5 mb-8'>
              <div className='flex items-center gap-5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
                <div className='text-lg'>
                  <input
                    className='font-bold min-w-[400px] px-4 py-2 border border-black rounded-sm'
                    value={section.name}
                    onChange={(e) => handleChangeSectionName(sectionIndex, e.target.value)}
                  />
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 cursor-pointer'
                  onClick={() => handleAddLesson(sectionIndex)}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 cursor-pointer'
                  onClick={() => handleAddQuiz(sectionIndex)}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                  />
                </svg>

                <Dialog>
                  <DialogTrigger>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                      />
                    </svg>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Delete this section?</DialogTitle>
                      <hr />
                    </DialogHeader>
                    <DialogDescription>
                      This will delete your section and remove all the lectures and quiz inside this section.
                    </DialogDescription>
                    <DialogClose
                      className='text-white bg-primary py-2 rounded'
                      onClick={(e) => handleDeleteSection(sectionIndex)}
                    >
                      Delete
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            {section.lessons.map((lesson, lessonindex) => (
              <div className='bg-white p-6 my-4'>
                <div className='flex items-center justify-between gap-5'>
                  <div className='flex items-center gap-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                      />
                    </svg>
                    <input
                      className='text-md border border-black rounded-sm min-w-[400px] px-4 py-2'
                      value={lesson.name}
                      onChange={(e) => handleChangeLessonName(sectionIndex, lessonindex, e.target.value)}
                    />
                  </div>
                  <div className='flex items-center gap-3'>
                    <Input
                      onChange={(event) => {
                        handleFileChange(sectionIndex, lessonindex, event.target.files?.[0])
                      }}
                      type='file'
                    />

                    <Dialog>
                      <DialogTrigger>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete this lecture?</DialogTitle>
                          <hr />
                        </DialogHeader>
                        <DialogClose
                          className='text-white py-2 bg-primary rounded'
                          onClick={(e) => handleDeleteLesson(sectionIndex, lessonindex)}
                        >
                          Delete
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}

            {section.quiz && (
              <div className='bg-white p-6 my-4'>
                <div className='flex items-center justify-between gap-5'>
                  <div className='flex items-center gap-5'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z'
                      />
                    </svg>

                    <input
                      className='text-md w-[400px] border border-black rounded-sm px-4 py-2'
                      value={section.quiz.question}
                      onChange={(e) => handleChangeQuizQuestion(sectionIndex, e.target.value)}
                    />
                  </div>
                  <div className='flex items-center gap-3'>
                    <Dialog>
                      <DialogTrigger>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Delete this quiz?</DialogTitle>
                          <hr />
                        </DialogHeader>
                        <DialogClose
                          className='text-white py-2 bg-primary rounded'
                          onClick={(e) => handleDeleteQuiz(sectionIndex)}
                        >
                          Delete
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
                <div className='flex flex-col gap-3 py-6 px-12'>
                  <div>Answers:</div>
                  <input
                    className='w-[400px] border border-black rounded-sm px-4 py-2'
                    value={section.quiz.first_choice}
                    onChange={(e) => handleChangeQuizAnswers(sectionIndex, 'first_choice', e.target.value)}
                  ></input>
                  <input
                    className='w-[400px] border border-black rounded-sm px-4 py-2'
                    value={section.quiz.second_choice}
                    onChange={(e) => handleChangeQuizAnswers(sectionIndex, 'second_choice', e.target.value)}
                  ></input>
                  <input
                    className='w-[400px] border border-black rounded-sm px-4 py-2'
                    value={section.quiz.third_choice}
                    onChange={(e) => handleChangeQuizAnswers(sectionIndex, 'third_choice', e.target.value)}
                  ></input>
                  <input
                    className='w-[400px] border border-black rounded-sm px-4 py-2'
                    value={section.quiz.fourth_choice}
                    onChange={(e) => handleChangeQuizAnswers(sectionIndex, 'fourth_choice', e.target.value)}
                  />
                  <div className='font-bold'>Correct answer:</div>
                  <select
                    className='w-[400px] border border-black rounded-sm px-4 py-2 focus:ring-none focus:outline-none'
                    defaultValue={section.quiz.correct_choice}
                    onChange={(e) => handleChangeQuizAnswers(sectionIndex, 'correct_choice', e.target.value)}
                  >
                    <option value='' disabled>
                      Please choose correct answer
                    </option>
                    <option value='first_choice'>{section.quiz.first_choice}</option>
                    <option value='second_choice'>{section.quiz.second_choice}</option>
                    <option value='third_choice'>{section.quiz.third_choice}</option>
                    <option value='fourth_choice'>{section.quiz.fourth_choice}</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        ))}
        <Button className='w-full rounded-sm text-white' onClick={(e) => handleAddSection()}>
          Add Sections
        </Button>
        <div className='flex mt-20 justify-end'>
          <Button
            className=' text-primary rounded-sm bg-white border-primary border py-3 px-6 hover:bg-white hover:opacity-80'
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
