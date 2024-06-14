import { VideoData, EncodedVideo } from './VideoEntities';
import { VideoCodec } from './VideoCodec';

export interface VideoEncodingAlgorithm {
  encode(videoData: VideoData, codec: VideoCodec): EncodedVideo;
}
