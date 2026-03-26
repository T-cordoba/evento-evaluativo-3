export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Task Manager
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Descripción</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Es una app web para gestionar tareas del día a día. Se pueden crear
          tareas, marcarlas como completadas y llevar un registro de lo que se
          tiene pendiente, todo desde el navegador.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">¿Qué problema resuelve?</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          A veces se tienen muchos pendientes y se olvidan fácilmente. Esta app
          sirve para tener todo anotado en un solo lugar, sin complicaciones,
          para no perder el hilo de lo que falta por hacer.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Integrantes del grupo</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Tomas Córdoba Urquijo
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Emmanuel Calad Correa
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Jorge Steven Lopez
        </p>
      </section>
    </div>
  );
}
