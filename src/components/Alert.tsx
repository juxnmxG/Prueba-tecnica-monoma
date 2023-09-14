interface Props {
  text: string;
}
function Alert({ text }: Props) {
  return (
    <div
      className="absolute top-2 right-2 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Alerta! </span>
      {text}
    </div>
  );
}

export default Alert;
