// "use client";

// import { useState } from "react";

// import { trpc } from "~/trpc/react";

// export function LatestPost() {
//   const [latestPost] = trpc.post.getLatest.useSuspenseQuery();

//   const utils = trpc.useUtils();
//   const [name, setName] = useState("");
//   const createPost = trpc.post.create.useMutation({
//     onSuccess: async () => {
//       await utils.post.invalidate();
//       setName("");
//     },
//   });

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createPost.mutate({ name });
//         }}
//         className="flex flex-col gap-2"
//       >
//         <input
//           type="text"
//           placeholder="Title"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full rounded-full px-4 py-2 text-black"
//         />
//         <button
//           type="submit"
//           className="rounded-full bg-base-0/10 px-10 py-3 font-semibold transition hover:bg-base-0/20"
//           disabled={createPost.isPending}
//         >
//           {createPost.isPending ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }
