import { ForbiddenException, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(dto: AuthDto) {
    //generate the password hash
    const hash = await argon.hash(dto.password);

    //save the new user in db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          passwordHash: hash, // passwordHash is the column name
        },
      });
      //return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  signin(dto: AuthDto) {
    //find the user by email
    // const user = this.prisma.user.findUnique({
    //     where: {
    //         email: dto.email,
    //     }
    // })
    //if user does not exist throw exception

    //compare password
    //if password incorrect throw an exception

    //send back the user
    return { msg: 'I have signed in' };
  }
}
