import { Course } from '~/types/course.type'
import http from '~/utils/http'
import { CreateCourseSchemaType } from '~/utils/rules'

const courseApi = {
  createCourse: (body: Omit<CreateCourseSchemaType, 'thumbnailFile' | 'trailerFile'>) =>
    http.post('course/course_create', body),
  getCourses: () => http.get<Course[]>('course/course_get_all'),
  createSections: (body: any) => http.post('section/create_section', body),
  enrollCourse: (body: { courseId: number }) => http.post('course/student_enroll_course', body),
  getStudentCourses: () => http.get('course/get_students_courses'),
  getSections: (courseId: number) => http.get(`section/get_course_sections`, { params: { courseId } })
}

export default courseApi
