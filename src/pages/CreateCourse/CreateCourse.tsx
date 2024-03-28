import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import thumbnailImage from '~/assets/images/thumbnail.png'
import axios from 'axios'
import { CreateCourseSchemaType, createCourseSchema } from '~/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import omit from 'lodash/omit'
import { useMutation, useQuery } from '@tanstack/react-query'
import courseApi from '~/apis/course.api'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import userApi from '~/apis/user.api'

type FormData = Omit<CreateCourseSchemaType, 'thumbnailPath' | 'trailerPath'>

export default function CreateCourse() {
  const [searchInstructors, setSearchInstructors] = useState<string>('')
  const form = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      language: '',
      level: '',
      category: '',
      thumbnailFile: '',
      trailerFile: '',
      teacherInChargeIds: [1, 2]
    },
    resolver: yupResolver(createCourseSchema)
  })

  const handleUploadFileCloudinary = async (trailerFile: File, thumbnailFile: File) => {
    const uploadedFiles = [trailerFile, thumbnailFile]
    let filePaths: string[] = []

    for (const file of uploadedFiles) {
      const formBodyData = new FormData()

      formBodyData.append('file', file)
      formBodyData.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_PRESET}`)

      await fetch(`${process.env.REACT_APP_CLOUDINARY_URL}`, {
        method: 'POST',
        body: formBodyData
      })
        .then((res) => res.json())
        .then((data) => {
          filePaths.push(data.url)
        })
    }

    return filePaths
  }

  const handleSearchInstructors = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInstructors(e.target.value)
  }

  // const { data: instructors } = useQuery({
  //   queryKey: ['instructors'],
  //   queryFn: userApi.getTeachers
  // })

  // const onSubmit = async (values: any) => {
  //   const { trailerFile, thumbnailFile, ...courseInformation } = values
  //   courseInformation.teacherInChargeIds = [1, 2]

  //   const filePaths = await handleUploadFileCloudinary(trailerFile, thumbnailFile)

  //   courseInformation.trailerPath = filePaths[0]
  //   courseInformation.thumbnailPath = filePaths[1]

  //   console.log(courseInformation)

  //   const course = await axios.post('/course/course_create', courseInformation)
  //   console.log(course)
  // }
  const createCourseMutation = useMutation({
    mutationFn: courseApi.createCourse
  })

  const onSubmit = async (data: FormData) => {
    console.log(data)
    const { trailerFile, thumbnailFile } = data
    const filePaths = await handleUploadFileCloudinary(trailerFile as File, thumbnailFile as File)
    const body = {
      ...omit(data, ['trailerFile', 'thumbnailFile']),
      trailerPath: filePaths[0],
      thumbnailPath: filePaths[1]
    }
    createCourseMutation.mutate(body, {
      onSuccess: () => {
        toast.success('Course created successfully', { autoClose: 2000 })
        form.reset()
      },
      onError: () => {}
    })
  }

  return (
    <div className='bg-slate-200 py-16 px-8 ml-[260px] pt-28'>
      <div className='bg-white p-6'>
        <h1 className='font-bold text-2xl text-center mb-6'>Course Information</h1>
        <hr className='mb-6' />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Course title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Course description' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='grid grid-cols-3 gap-5'>
              <FormField
                control={form.control}
                name='language'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Language</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Course language' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='en'>English</SelectItem>
                          <SelectItem value='vi'>Vietnamese</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='level'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Level</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Course level' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='beginner'>Beginner</SelectItem>
                          <SelectItem value='intermediate'>Intermediate</SelectItem>
                          <SelectItem value='advanced'>Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Category</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder='Category' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value='ml'>Machine Learning</SelectItem>
                          <SelectItem value='ai'>Artificial Inteligence</SelectItem>
                          <SelectItem value='dl'>Deep Learning</SelectItem>
                          <SelectItem value='dsc'>Data Science</SelectItem>
                          <SelectItem value='cv'>Computer Vision</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <FormField
                control={form.control}
                name='thumbnailFile'
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Course Thumbnail</FormLabel>
                    <div className='flex gap-5 mt-3'>
                      <img src={thumbnailImage} alt='' className='' />
                      <div className='flex flex-col items-center justify-around'>
                        <p className='text-sm text-slate-400'>
                          Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio.
                          Supported format: .jpg, .jpeg, or .png
                        </p>
                        <Input
                          {...field}
                          value={value.fileName}
                          onChange={(event) => {
                            onChange(event.target.files?.[0])
                          }}
                          type='file'
                        />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='trailerFile'
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Course Trailer</FormLabel>
                    <div className='flex gap-5 mt-3'>
                      <img src={thumbnailImage} alt='' className='' />
                      <div className='flex flex-col items-center justify-around'>
                        <p className='text-sm text-slate-400'>
                          Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio.
                          Supported format: .jpg, .jpeg, or .png
                        </p>
                        <Input
                          {...field}
                          value={value.fileName}
                          onChange={(event) => {
                            onChange(event.target.files?.[0])
                          }}
                          type='file'
                        />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormLabel>Assign Instructor</FormLabel>
              <div className='flex items-center w-[50%] mt-3'>
                <div className='w-full relative'>
                  <div className='absolute top-2 left-2'>
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
                        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                      />
                    </svg>
                  </div>

                  <input
                    type='text'
                    placeholder='Search Intructors...'
                    className='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 pl-10 mb-5'
                    value={searchInstructors}
                    onChange={handleSearchInstructors}
                  />

                  <div className='grid grid-cols-3 gap-6 mb-10'>
                    {/* {instructors.map((instructor) => (
                      <div className='flex justify-between items-center px-4 py-2 bg-slate-200'>
                        <div className='col-span-1 flex gap-1'>
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
                              d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                            />
                          </svg>
                          <div>asfsafsa</div>
                        </div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
                        </svg>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>
            </div>
            <Button type='submit' className='text-white'>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
