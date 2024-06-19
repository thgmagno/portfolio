export const Skill = ({
  skill,
}: {
  skill: { label: string; level: number }
}) => (
  <div className="my-3 flex justify-between">
    <span>{skill.label}</span>
    <div className="flex gap-2">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < skill.level ? (
            <div className="h-4 w-4 rounded-full bg-neutral-400" />
          ) : (
            <div className="h-4 w-4 rounded-full bg-neutral-800" />
          )}
        </span>
      ))}
    </div>
  </div>
)
