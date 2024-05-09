import { breadCrumbList } from "../util";

const Breadcrumb = () => {
  let i = 1;
  return (
    <>
      <nav className="flex px-20 py-2" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          {breadCrumbList.map((bread) => {
            const list =
              i == breadCrumbList.length ? (
                <li aria-current="page" key={bread?.id}>
                  <div className="flex items-center">
                    {bread?.svg}
                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      {bread?.name}
                    </span>
                  </div>
                </li>
              ) : (
                <li className="inline-flex items-center" key={bread?.id}>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    {bread?.svg}
                    {bread?.name}
                  </a>
                </li>
              );
            i++;
            return list;
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
