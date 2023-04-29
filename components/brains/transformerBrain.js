import {
  Transformer,
  Embedding,
  Attention,
  FeedForward,
  PositionalEncoding,
} from "transformers";

const GPT = class extends Transformer {
  constructor(vocabSize, hiddenSize, numHeads, numLayers) {
    super(vocabSize, hiddenSize, numHeads, numLayers);
    this.embedding = new Embedding(vocabSize, hiddenSize);
    this.attention = new Attention(hiddenSize, numHeads);
    this.feedForward = new FeedForward(hiddenSize, hiddenSize);
    this.positionalEncoding = new PositionalEncoding(hiddenSize);
  }

  forward(x) {
    x = this.embedding(x);
    x = this.positionalEncoding(x);
    for (let i = 0; i < this.numLayers; i++) {
      x = this.attention(x);
      x = this.feedForward(x);
    }
    return x;
  }
};

export default GPT;


const model = new GPT(10000, 128, 8, 2);
const x = model.embedding(["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]);
const y = model.forward(x);
const prediction = model.softmax(y);
console.log(prediction);
