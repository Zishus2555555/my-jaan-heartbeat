import { HeartIcon } from "./HeartIcon";

export const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute float-heart"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 2)}s`,
          }}
        >
          <HeartIcon className="text-love-red opacity-30" />
        </div>
      ))}
    </div>
  );
};