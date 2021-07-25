import { useState } from 'react';

type NavbarProps = {
  transparent: boolean;
};

const Navbar: React.FC<NavbarProps> = (props) => {
  const { transparent } = props;

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={
        (transparent
          ? 'top-44 absolute z-50 w-full'
          : 'relative shadow-lg bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <span
            className={
              (transparent ? 'text-white' : 'text-gray-800') +
              ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
          >
            Random Ass Page
          </span>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (transparent ? 'text-white' : 'text-gray-800') + ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') +
                    ' fab fa-facebook text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') + ' fab fa-twitter text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href="#pablo"
              >
                <i
                  className={
                    (transparent
                      ? 'lg:text-gray-300 text-gray-500'
                      : 'text-gray-500') + ' fab fa-github text-lg leading-lg '
                  }
                />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
