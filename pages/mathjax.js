import dynamic from 'next/dynamic';

const DynamicMathComponent = dynamic(() => import("mathjax-react").then((mod) => mod.MathComponent), { ssr: false });

export default function MathJax ({input}) {
  return (
    <>
      {typeof window !== 'undefined' && (
        // <DynamicMathComponent tex={String.raw`\ ${input}\` />
        <DynamicMathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
      
      )}
    </>
  );
}
