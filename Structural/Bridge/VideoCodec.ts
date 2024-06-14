import { VideoData, EncodedData } from './VideoEntities';

export interface VideoCodec {
  encode(videoData: VideoData): EncodedData;
}
