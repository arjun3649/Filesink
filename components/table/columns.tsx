"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Image } from "lucide-react";
import { FileIcon, defaultStyles } from "react-file-icon";
import prettyBytes from "pretty-bytes";
import { FileType } from "@/typings";
import { COLOR_EXTENSION_MAP } from "@/constants";


export const columns: ColumnDef<FileType>[] = [
  {
   
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return (
        <div className="w-10">
          <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            
            // @ts-ignore
            {...defaultStyles[extension]}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadURL",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      console.log(typeof(renderValue()));
    
        //  download(
        //    "https://firebasestorage.googleapis.com/v0/b/dropbox-clone-170b7.appspot.com/o/users%2Fuser_2Zs5AAIVdxShkVGoZegTsa6y97e%2Ffiles%2Fa3JgYsnvPFOaHEgO8dCO?alt=media&token=107d1d9c-5f7e-456a-9bf7-4080a5af2822","image.png"
        // );
      return (
        <div className="flex flex-col">
          <a
            href={renderValue() as string}
            target="_blank"
            className="underline  text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            Preview
          </a>

        
        </div>
      );
    },
  },
];
