import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('/api/control/videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post('/test')
  test(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.test();
  }

  @Post('/convertTSFilesToPNG')
  convertTSFilesToPNG(@Body() createVideoDto: CreateVideoDto) {
    return this.videosService.convertTSFilesToPNG();
  }
  
  // @Get('/data')
  // data(@Body() createVideoDto: CreateVideoDto) {
  //   return this.videosService.getDataAnime();
  // }
}
