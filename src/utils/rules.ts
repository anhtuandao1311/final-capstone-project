import * as yup from 'yup'

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email is not valid')
    .required('Email cannot be empty')
    .min(5, 'Email must be at least 5 characters'),
  password: yup
    .string()
    .required('Password cannot be empty')
    .min(6, 'Password must be at least 6 characters')
    .max(100, 'Password must be at most 100 characters')
})

export const createCourseSchema = yup.object({
  title: yup
    .string()
    .required('Title cannot be empty')
    .min(5, 'Title must be at least 5 characters')
    .max(100, 'Title must be at most 100 characters'),
  description: yup
    .string()
    .required('Description cannot be empty')
    .min(5, 'Description must be at least 5 characters')
    .max(1000, 'Description must be at most 1000 characters'),
  language: yup.string().oneOf(['en', 'vi'], 'Language must be en or vi'),
  category: yup.string().oneOf(['ml', 'ai', 'dl', 'dsc', 'cv'], 'Category must be ml, ai, dl, dsc, cv'),
  level: yup.string().oneOf(['beginner', 'intermediate', 'advanced'], 'Level must be beginner, intermediate, advanced'),
  thumbnailPath: yup.string().url('Thumbnail must be a valid URL'),
  thumbnailFile: yup.mixed().required('Thumbnail is required'),
  trailerPath: yup.string().url('Trailer must be a valid URL'),
  trailerFile: yup.mixed().required('Trailer is required'),
  teacherInChargeIds: yup.array().of(yup.number()).min(1, 'At least 1 teacher in charge')
})

export type LoginSchemaType = yup.InferType<typeof loginSchema>
export type CreateCourseSchemaType = yup.InferType<typeof createCourseSchema>
