import { VideoCodec } from './VideoCodec';
import { VideoData, EncodedData } from './VideoEntities';

export class H264Codec implements VideoCodec {
  encode(videoData: VideoData): EncodedData {
    return new EncodedData('h264');
  }
}
