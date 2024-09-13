import Link from "next/link"

<<<<<<< HEAD
export default function Recursos() {
=======
export default function Component() {
>>>>>>> 82784f21658a7c666ea8a7ff3018f82bf58f40ec
  return (
    <div className="flex p-12">
      <main className="w-[75%]">
        <div className="prose max-w-3xl">
          <h1>Lesson 3: Advanced Concepts</h1>
          <video className="w-full aspect-video rounded-lg" controls>
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
              type="video/mp4"
            />
          </video>

<<<<<<< HEAD
          <div className="w-[40%] border-t p-4 flex gap-2 justify-between items-center">
=======
          <div className="w-[40%] bg-muted border-t p-4 flex gap-2 justify-between items-center">
>>>>>>> 82784f21658a7c666ea8a7ff3018f82bf58f40ec
            <Link href="#">Previous</Link>
            <Link href="#">View All</Link>
            <Link href="#">Next</Link>
          </div>

          <p>
            In this lesson, we will dive into more advanced concepts and techniques to take your skills to the next
            level.
          </p>
        </div>
      </main>
      <aside className="w-[25%] bg-muted border-l">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">Lesson 3</span>

            {/* Aqui va la barra de progeso */}

          </div>
          <h3 className="text-lg font-bold">Advanced Concepts</h3>
          <div className="space-y-2">
            <p>Functional programming, asynchronous JavaScript, and design patterns.</p>
          </div>

          {/* Aqui va el separador */}

          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contents</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm hover:bg-accent hover:text-accent-foreground px-2 py-1 rounded"
                  prefetch={false}
                >
                  <span>Lesson 1</span>
                  <span className="text-muted-foreground">Completed</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm hover:bg-accent hover:text-accent-foreground px-2 py-1 rounded"
                  prefetch={false}
                >
                  <span>Lesson 2</span>
                  <span className="text-muted-foreground">Completed</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm hover:bg-accent hover:text-accent-foreground px-2 py-1 rounded bg-accent text-accent-foreground"
                  prefetch={false}
                >
                  <span>Lesson 3</span>
                  <span className="text-muted-foreground">In Progress</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between text-sm hover:bg-accent hover:text-accent-foreground px-2 py-1 rounded"
                  prefetch={false}
                >
                  <span>Lesson 4</span>
                  <span className="text-muted-foreground">Not Started</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  )
}