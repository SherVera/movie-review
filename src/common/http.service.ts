import { HttpService as HttpAxios } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { lastValueFrom } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  private API_URL: string;
  private AUTHORIZATION_API_KEY: string;
  constructor(
    private http: HttpAxios,
    private readonly configService: ConfigService,
  ) {
    this.API_URL = this.configService.get<string>('API_URL');

    this.AUTHORIZATION_API_KEY = this.configService.get<string>(
      'AUTHORIZATION_API_KEY',
    );
  }

  async get(url: string): Promise<any> {
    const { data } = await lastValueFrom(
      this.http
        .get(`${this.API_URL}${url}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${this.AUTHORIZATION_API_KEY}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
          }),
        ),
    );
    return data;
  }
}
