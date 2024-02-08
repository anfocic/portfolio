import { AlertModel } from "../pages/Contact";

const Alert = (alert: any) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
      <div
        className={`p-2 ${
          alert.type === "danger" ? "bg-red-800" : "bg-blue-800"
        } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            alert.type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {alert.type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left'>{alert.text}</p>
      </div>
    </div>
  );
};

export default Alert;