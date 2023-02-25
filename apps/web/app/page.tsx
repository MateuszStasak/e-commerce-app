import { gql } from '../data-access/graphql-client'

export default async function Page() {
  const result = await gql.GetUsers()
  console.log(result.users)
  return (
    <figure className="m-6 rounded-xl bg-slate-100 p-8 text-white dark:bg-slate-800">
      <img
        className="mx-auto h-24 w-24 rounded-full"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        alt=""
        width="384"
        height="512"
      />
      <div className="space-y-4 pt-6">
        <blockquote>
          <p className="text-lg font-medium">
            “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams. It&apos;s
            easy to customize, adapts to any design, and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption>
          <div>Sarah Dayan</div>
          <div>Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  )
}
