import { useForm } from 'react-hook-form'
import { Button } from '~/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import videoImage from '~/assets/images/video.png'
import thumbnailImage from '~/assets/images/thumbnail.png'
import FileInput from '~/components/FileInput/FileInput'

export default function CreateCourse() {
  const form = useForm({})

  function onSubmit(values: any) {
    console.log(values)
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
                          <SelectItem value='English'>English</SelectItem>
                          <SelectItem value='Vietnamese'>Vietnamese</SelectItem>
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
                          <SelectItem value='Beginner'>Beginner</SelectItem>
                          <SelectItem value='Intermediate'>Intermediate</SelectItem>
                          <SelectItem value='Advanced'>Advanced</SelectItem>
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
                          <SelectItem value='Beginner'>Beginner</SelectItem>
                          <SelectItem value='Intermediate'>Intermediate</SelectItem>
                          <SelectItem value='Advanced'>Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div>
                <FormLabel>Course Thumbnail</FormLabel>
                <div className='flex gap-5 mt-3'>
                  <img src={thumbnailImage} alt='' className='' />
                  <div className='flex flex-col items-center justify-around'>
                    <p className='text-sm text-slate-400'>
                      Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported
                      format: .jpg, .jpeg, or .png
                    </p>
                    <FileInput />
                  </div>
                </div>
              </div>
              <div>
                <FormLabel>Course Video</FormLabel>
                <div className='flex gap-5 mt-3'>
                  <img src={videoImage} alt='' />
                  <div className='flex flex-col items-center justify-around'>
                    <p className='text-sm text-slate-400'>
                      Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen
                      that statistic go up to 10X for exceptionally awesome videos.
                    </p>
                    <FileInput />
                  </div>
                </div>
              </div>
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
                    className='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 pl-10'
                  />
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
