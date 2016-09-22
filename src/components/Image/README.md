Image:

```
const image = {
  src: 'https://octodex.github.com/images/welcometocat.png',
  alt: 'Welcometocat.png',
  preview: 'data:image/jpg;base64,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',
  height: 896,
  width: 896
};
<Img
  src={image.src}
  alt={image.alt}
  preview={image.preview}
  width={image.width}
  height={image.height}
/>
```