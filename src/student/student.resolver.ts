import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  // mutation {
  //   createStudent(createStudentInput: {
  //     firstName: "Dima",
  //     lastName: "Andr"
  //   }) {
  //     id
  //     firstName
  //     lastName
  //   }
  // }

  @Query((returns) => [StudentType])
  async students() {
    return this.studentService.getStudents();
  }

  // query {
  //   students {
  //     firstName
  //   }
  // }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  // query {
  //   student(id: "639b6524-5164-43ed-ad5f-3ebe7d557560") {
  //     firstName
  //   }
  // }
}
