import { VideoCodec } from './VideoCodec';
import { VideoData, EncodedData } from './VideoEntities';

export class AV1Codec implements VideoCodec {
  encode(videoData: VideoData): EncodedData {
    return new EncodedData('av1');
  }
}
