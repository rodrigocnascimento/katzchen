import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create(pet): any {
    return pet;
  }

  getAll(): any {
    return [
      {
        id: 1,
        photo:
          'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rodregoc%252Fmobile/ImagePicker/d99a5d35-140c-4b95-a666-b16607e09a66.jpeg',
        castrado: 'true',
        dob: '2023-02-08T00:57:40.321Z',
        race: 'bobtail_japones',
        name: 'Lorem',
        gender: 'female',
      },
      {
        id: 2,
        photo:
          'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rodregoc%252Fmobile/ImagePicker/d99a5d35-140c-4b95-a666-b16607e09a66.jpeg',
        castrado: 'true',
        dob: '2023-02-08T00:57:40.321Z',
        race: 'bobtail_japones',
        name: 'Efigênia',
        gender: 'female',
      },
      {
        id: 3,
        photo:
          'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rodregoc%252Fmobile/ImagePicker/d99a5d35-140c-4b95-a666-b16607e09a66.jpeg',
        castrado: 'true',
        dob: '2023-02-08T00:57:40.321Z',
        race: 'bobtail_japones',
        name: 'Margô',
        gender: 'female',
      },
      {
        id: 4,
        photo:
          'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540rodregoc%252Fmobile/ImagePicker/d99a5d35-140c-4b95-a666-b16607e09a66.jpeg',
        castrado: 'true',
        dob: '2023-02-08T00:57:40.321Z',
        race: 'bobtail_japones',
        name: 'Loki',
        gender: 'male',
      },
    ];
  }
}
