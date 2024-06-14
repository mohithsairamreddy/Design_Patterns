import { VideoData, EncodedVideo } from './VideoEntities';
import { H264Codec } from './H264Codec';
import { VP9Codec } from './VP9Codec';
import { AV1Codec } from './AV1Codec';
import { ConstantBitRateEncoding } from './ConstantBitRateEncoding';
import { VariableBitRateEncoding } from './VariableBitRateEncoding';
import { AdaptiveBitRateEncoding } from './AdaptiveBitRateEncoding';

const videoData = new VideoData();
const h264Codec = new H264Codec();
const vp9Codec = new VP9Codec();
const av1Codec = new AV1Codec();

const constantBitRateEncoding = new ConstantBitRateEncoding();
const variableBitRateEncoding = new VariableBitRateEncoding();
const adaptiveBitRateEncoding = new AdaptiveBitRateEncoding();

const encodedVideoH264 = constantBitRateEncoding.encode(videoData, h264Codec);
const encodedVideoVP9 = variableBitRateEncoding.encode(videoData, vp9Codec);
const encodedVideoAV1 = adaptiveBitRateEncoding.encode(videoData, av1Codec);

console.log(encodedVideoH264.getEncodingType()); 
console.log(encodedVideoVP9.getEncodingType()); 
console.log(encodedVideoAV1.getEncodingType()); 

console.log(encodedVideoH264.getEncodedData().getFormat()); 
console.log(encodedVideoVP9.getEncodedData().getFormat()); 
console.log(encodedVideoAV1.getEncodedData().getFormat()); 
