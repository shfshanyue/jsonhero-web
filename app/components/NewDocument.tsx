import { DragAndDropForm } from "./DragAndDropForm";
import { Title } from "./Primitives/Title";
import { SampleUrls } from "./SampleUrls";
import { UrlForm } from "./UrlForm";

export function NewDocument() {
  return (
    <div className="p-3 text-white transition bg-indigo-700 rounded-sm shadow-md w-96 max-w-max">
      <div className="flex flex-col">
        <UrlForm className="mb-2" />
        <DragAndDropForm />

        {/* <div className="mt-4">
          <Title className="mb-2 text-slate-200">No JSON? Try it out:</Title>
          <SampleUrls />
        </div> */}
      </div>
    </div>
  );
}
