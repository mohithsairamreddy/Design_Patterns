import { VideoEncodingAlgorithm } from './VideoEncodingAlgorithm';
import { VideoData, EncodedVideo } from './VideoEntities';
import { VideoCodec } from './VideoCodec';

export class ConstantBitRateEncoding implements VideoEncodingAlgorithm {
  encode(videoData: VideoData, codec: VideoCodec): EncodedVideo {
    const encodedData = codec.encode(videoData);
    return new EncodedVideo(encodedData, 'ConstantBitRate');
  }
}
