import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'

import { FormLabel } from '~/components/ui/form'
import { Input } from '~/components/ui/input'

import { Button } from '~/components/ui/button'
import FileInput from '~/components/FileInput'

export default function EditCourse() {
  return (
    <div className='bg-slate-100 py-16 px-8 ml-[260px] pt-28 min-h-screen'>
      <div className='bg-white p-6'>
        <h1 className='font-bold text-2xl text-center mb-6'>Course Curriculum</h1>
        <hr className='mb-6' />
        <div className='p-6 bg-slate-100'>
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
                <span className='font-bold'>Sections 01:</span> Getting started
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
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
                      d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                    />
                  </svg>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Section Name</DialogTitle>
                    <hr />
                  </DialogHeader>
                  <div>
                    <div className='mb-3'>Section name</div>
                    <Input placeholder='Write your section name here...'></Input>
                  </div>
                  <Button className='text-white'>Save changes</Button>
                </DialogContent>
              </Dialog>

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
                    This action cannot be undone. This will permanently delete your section and remove all the lectures
                    inside this section.
                  </DialogDescription>
                  <Button className='text-white'>Delete</Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
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
                    <div className='text-md'>Lecture 1: Introduction</div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder='Choose media type' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='video'>Video</SelectItem>
                        <SelectItem value='quiz'>Quiz</SelectItem>
                        <SelectItem value='lecture'>Lecture Notes</SelectItem>
                      </SelectContent>
                    </Select>

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
                            d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Upload Lecture Video</DialogTitle>
                          <hr />
                        </DialogHeader>
                        <div className='flex'>
                          <Input placeholder='Upload file...' disabled className='flex-1'></Input>
                          <FileInput />
                        </div>
                        <Button className='text-white'>Save changes</Button>
                      </DialogContent>
                    </Dialog>

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
                            d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Lecture Name</DialogTitle>
                          <hr />
                        </DialogHeader>
                        <div>
                          <div className='mb-3'>Lecture name</div>
                          <Input placeholder='Write your lecture name here...'></Input>
                        </div>
                        <Button className='text-white'>Save changes</Button>
                      </DialogContent>
                    </Dialog>

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
                        <DialogDescription>
                          This action cannot be undone. This will permanently delete your lecture.
                        </DialogDescription>
                        <Button className='text-white'>Delete</Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          <Button className='w-full rounded-sm text-white'>Add Sections</Button>
          <div className='flex mt-20 justify-end'>
            <Button className=' text-primary rounded-sm bg-white border-primary border py-3 px-6 hover:bg-white hover:opacity-80'>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
