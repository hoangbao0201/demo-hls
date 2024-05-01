import { Injectable } from '@nestjs/common';
import * as path from 'path';
import { exec } from 'child_process';
import axios from 'axios';
import * as fs from 'fs/promises';

@Injectable()
export class VideosService {
  // async test() {
  //   try {
  //     console.log('=== START ===');
  //     const root = path.join(__dirname, '../..', 'data');
  //     const videoDir = path.join(__dirname, '../..', 'public/videos');
  //     const videoPath = path.join(videoDir, 'chungtacuatuonglai.mp4');

  //     console.log('root: ', root);
  //     console.log('videoDir: ', videoDir);
  //     console.log('videoPath: ', videoPath);

  //     return new Promise<number>((resolve, reject) => {
  //       exec(
  //         `ffmpeg -i ${videoPath} -vf scale=320:180 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ${path.join(root, 'segment.m3u8')}`,
  //         (err, stdout, stderr) => {
  //           if (err) {
  //             return reject(err);
  //           }
  //           resolve(Number(stdout.trim()));
  //         },
  //       );
  //     });
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: error,
  //     };
  //   }
  // }

  // async convertTSFilesToPNG() {
  //   try {
  //       const rootPath = path.join(__dirname, '../..', 'data', 'segment');
  //       const files = await fs.readdir(rootPath);
  //       const tsFiles = files.filter(file => file.endsWith('.ts'));

  //       for (const tsFile of tsFiles) {
  //           const tsFilePath = path.join(rootPath, tsFile);
  //           const pngFilePath = path.join(rootPath, `${tsFile}.png`);

  //           // Sử dụng FFmpeg để trích xuất khung hình đầu tiên và chuyển đổi thành PNG 1x1
  //           await new Promise((resolve, reject) => {
  //               exec(`ffmpeg -i ${tsFilePath} -vf "select=eq(n\\,0),scale=1:1" -vframes 1 ${pngFilePath}`, (err, stdout, stderr) => {
  //                   if (err) {
  //                       // reject(err);
  //                       return {
  //                         success: false
  //                       }
  //                   } else {
  //                       return {
  //                         success: true
  //                       }
  //                   }
  //               });
  //           });
  //       }

  //       console.log('Chuyển đổi hoàn thành.');
  //   } catch (error) {
  //       console.error('Đã xảy ra lỗi:', error);
  //   }
  // }


  // async getDataAnime() {
  //   try {
  //     const resAnime = await axios.get(
  //       'https://ads.tiktok.com/api/v2/i18n/material/image/upload/?aadvid=7363738268946497537&req_src=am_lite&msToken=z63Xc1eRK0GGnC4XjSLHY4Lt0BJVoV84DA4NOs7q9a_v7gXAskVb9C-jmN9L_ED6t7wtUKkHa-BokcR3a8-aZjmw99yIvHKgsC9FeMMhwiPs-yNIGSes2stL4PH0nm7ydHXI4DRONe152JuD',
  //       {
  //         headers: {
  //           Referer: 'https://animew.org/',
  //         },
  //       },
  //     );

  //     return {
  //       success: true,
  //       data: JSON.stringify(resAnime?.data),
  //     };
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: error,
  //     };
  //   }
  // }
}
