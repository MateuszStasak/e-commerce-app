import { gql } from '../data-access/graphql-client';

export default async function Page() {
  const result = await gql.GetUsers();
  console.log(result.users);
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 text-white m-6">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>Sarah Dayan</div>
          <div>Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
}
