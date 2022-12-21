const ClaimNow = () => {
  return (
    <div className="grid gap-5 mt-6 mb-5 sm:grid-cols-2">
      <div className="md:col-span-2">
        <label
          htmlFor="employer1"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          What was the name of your employer between 2020 - 21?
        </label>
        <input
          type="text"
          name="employer1"
          id="employer1"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="First Name"
          required
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Please write your employer's name as it appears on your payslip
        </p>
      </div>
      <div className="md:col-span-2">
        <label
          htmlFor="employer2"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          What was the name of your employer between 2021 - 22?
        </label>
        <input
          type="text"
          name="employer2"
          id="employer2"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="First Name"
          required
        />
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Please write your employer's name as it appears on your payslip
        </p>
      </div>
      <div className="md:col-span-2">
        <label
          htmlFor="confirm"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Please confirm the following:
        </label>
        <div className="mb-2">
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              I haven&apos;t already claimed the working from home allowance
            </span>
          </label>
        </div>
        <div>
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              I do not complete a Self-Assessment Tax Return
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClaimNow;
