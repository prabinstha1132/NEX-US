"use client";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as actions from "../../actions";
import { useActionState } from "react";
import Image from "next/image";
export default function CreateTopic() {
  const [formState, action] = useActionState(actions.TopicCreate, {
    errors: {},
  });
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className=" flex h-20 w-full bg-purple-400 rounded-2xl items-center justify-center font-bold gap-1">
          <Image src="/plus.png" alt="plus" height={10} width={30} />
          <h2 className="text-2xl text-white">Create A Topic</h2>
        </div>
      </PopoverTrigger>
      <PopoverContent side="left">
        <form action={action}>
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-center">Create A Topic</h3>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-sm font-mediumx ml-3">
                Name
              </label>
              <Input id="name" name="name" placeholder="type here"></Input>
              {formState.errors.name && (
                <p className="text-sm text-red-500">
                  {formState.errors.name.join(", ")}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="description"
                className="text-sm font-mediumx ml-3"
              >
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="description"
              ></Textarea>
              {formState.errors.description && (
                <p className="text-sm text-red-500">
                  {formState.errors.description.join(", ")}
                </p>
              )}
            </div>
            {formState.errors._form && (
              <div className="rounded border border-red-400 bg-red-100 p-2 text-sm text-red-600">
                {formState.errors._form.join(", ")}
              </div>
            )}
            <Button type="submit">Create</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
