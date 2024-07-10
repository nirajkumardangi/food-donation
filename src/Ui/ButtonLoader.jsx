import { Button } from "@material-tailwind/react";

export default function ButtonLoader({ content }) {
  return (
    <div className="flex items-center gap-4">
      <Button
        loading={true}
        loaderProps={{ style: { color: '#1f2937' } }} // Inline style for dark gray color (Tailwind class text-gray-900 equivalent)
        className="bg-orange-500 hover:bg-orange-600 w-full flex justify-center" // Tailwind classes for orange background and centering text
      >
        {content}
      </Button>
    </div>
  );
}
