import { VideoCodec } from './VideoCodec';
import { VideoData, EncodedData } from './VideoEntities';

export class VP9Codec implements VideoCodec {
  encode(videoData: VideoData): EncodedData {
    return new EncodedData('vp9');
  }
}
