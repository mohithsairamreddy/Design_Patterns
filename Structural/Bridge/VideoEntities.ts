export class VideoData {
}

export class EncodedVideo {
  constructor(
    private encodedData: EncodedData,
    private encodingType: string
  ) {}

  getEncodedData(): EncodedData {
    return this.encodedData;
  }

  getEncodingType(): string {
    return this.encodingType;
  }
}

export class EncodedData {
  constructor(private format: string) {}

  getFormat(): string {
    return this.format;
  }
}
