import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fsWrite from 'fs';
import * as fsRead from 'fs/promises';
import { exec } from 'child_process';

@Injectable()
export class VideosService {
  async test() {
    try {
      console.log('=== START ===');

      console.log('=== START ===');
      const videoDir = path.join(__dirname, '../..', 'public/videos');
      const videoPath = path.join(videoDir, 'video-test.mp4');

      console.log('videoDir: ', videoDir);
      console.log('videoPath: ', videoPath);

      return new Promise<number>((resolve, reject) => {
        exec(
          `ffmpeg -i ${videoPath} -level 3.0 -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ${path.join(videoDir, 'segment.m3u8')}`,
          (err, stdout, stderr) => {
            if (err) {
              return reject(err);
            }
            resolve(Number(stdout.trim()));
          },
        );
      });
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error,
      };
    }
  }

  async convertTSFilesToPNG() {
    try {
      const videoDir = path.join(__dirname, '../..', 'hls');
      const videoPath = path.join(videoDir, 'segment0.ts');
      const outputFilePath = 'output.png';

      const files = await fsRead.readFile(videoPath);

      let hexString = files.toString('hex');
      const hexToRemove =
        '474011100042F0250001C10000FF01FF0001FC80144812010646466D70656709';
      const regex = new RegExp(hexToRemove, 'gi');
      hexString = hexString.replace(
        regex,
        '89504E470D0A1A0A0000000D49484452000000010000000108000000003A7E9B55000000097048597300000B1300000B1301009A9C180000000A49444154081D63F80F0001010100365F67800000000049454E44AE426082474011100042F0250001C10000FF01FF0001FC80144812010600000000000009',
      );

      const buffer = Buffer.from(hexString, 'hex');

      // Lưu buffer thành file PNG
      fsWrite.writeFile('output.png', buffer, (err) => {
        if (err) throw err;
        console.log('File PNG đã được lưu thành công!');
      });

      return {
        success: true,
        hexString: hexString,
        // files: files,
        // decodedText: decodedText
      };

      // for (const tsFile of tsFiles) {
      //     const tsFilePath = path.join(rootPath, tsFile);
      //     const pngFilePath = path.join(rootPath, `${tsFile}.png`);

      //     // Sử dụng FFmpeg để trích xuất khung hình đầu tiên và chuyển đổi thành PNG 1x1
      //     await new Promise((resolve, reject) => {
      //         exec(`ffmpeg -i ${tsFilePath} -vf "select=eq(n\\,0),scale=1:1" -vframes 1 ${pngFilePath}`, (err, stdout, stderr) => {
      //             if (err) {
      //                 // reject(err);
      //                 return {
      //                   success: false
      //                 }
      //             } else {
      //                 return {
      //                   success: true
      //                 }
      //             }
      //         });
      //     });
      // }

      // console.log('Chuyển đổi hoàn thành.');
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  }

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
