import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}
  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  // query {
  //   lesson(id: "8864eee2-3d3f-414a-a419-a7897885e818") {
  //     name
  //     startDate
  //   }
  // }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  // query {
  //   lessons {
  //     name
  //     startDate
  //     endDate
  //   }
  // }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonService.createLesson(createLessonInput);
  }

  // mutation {
  //   createLesson(
  //     createLessonInput: {
  //     name:"Test 1"
  //     startDate: "2020-03-28T18:00:00Z"
  //     endDate: "2020-03-28T18:30:00Z"
  //     }
  //   ) {
  //     name
  //     id
  //   }
  // }
}
