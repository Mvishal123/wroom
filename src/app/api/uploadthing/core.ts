import { db } from "@/lib/db";
import { getServerSession } from "@/utils/server-actions/get-server-session";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const middleware = async () => {
  const session = await getServerSession();
  if (!session) {
    throw new UploadThingError("Unauthorized");
  }

  return {
    session,
  };
};

export const ourFileRouter = {
  washroomImagesUploader: f({
    image: { maxFileSize: "4MB", minFileCount: 5, maxFileCount: 10 },
  })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        await db.washroomImage.create({
          data: {
            fileId: file.key,
            fileName: file.name,
            image: file.url,
            partnerId: metadata.session.userId,
          },
        });

        return {
          fileName: file.name,
        };
      } catch (error) {
        throw new UploadThingError("ERROR: " + error);
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
