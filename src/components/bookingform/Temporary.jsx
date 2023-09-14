
const cabs = [
    {
      id: 1,
      name: "Mercedes",
    },
    {
      id: 2,
      name: "Golf",
    },
    {
      id: 3,
      name: "Polo",
    },
    {
      id: 4,
      name: "Passat",
    },
    {
      id: 5,
      name: "Clio",
    },
  ];
  const ages = [
    {
      id: 1,
      name: "Any Age",
    },
    {
      id: 2,
      name: "<25",
    },
    {
      id: 3,
      name: "25-30",
    },
    {
      id: 4,
      name: "31-35",
    },
    {
      id: 5,
      name: "36-40",
    },
  
    {
      id: 6,
      name: "40<",
    },
  ];
  
  const cab_types = [
    {
      id: 1,
      name: "All Type",
    },
    {
      id: 2,
      name: "Hybrid",
    },
    {
      id: 3,
      name: "Luxury",
    },
  ];


  <Listbox value={selectedCabType} onChange={setSelectedCabType}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="active:outline-yellow-700 focus:outline-yellow-700 hover:outline-yellow-700 relative w-full h-[4rem] cursor-default shadow-md rounded-lg bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none focus:ring-2 ring-gray-400 ease-in-out duration-500 focus:ring-yellow-700 text-lg">
                      {/*sm:text-sm sm:leading-6 */}
                      <span className="ml-3 block truncate">
                        {selectedCabType.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                        <CarFrontFill
                          className="text-gray-400"
                          size={24}
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-lg">
                        {cab_types.map((cab_type) => (
                          <Listbox.Option
                            key={cab_type.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-yellow-700 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={cab_type}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {cab_type.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-yellow-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>

<Listbox value={selectedAge} onChange={setSelectedAge}>
{({ open }) => (
  <>
    <div className="relative">
      <Listbox.Button className="active:outline-yellow-700 focus:outline-yellow-700 hover:outline-yellow-700 relative w-full h-[4rem] cursor-default shadow-md rounded-lg bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none focus:ring-2 ring-gray-400 ease-in-out duration-500 focus:ring-yellow-700 text-lg">
        {/*sm:text-sm sm:leading-6 */}
        <span className="ml-3 block truncate">
          {selectedAge.name}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
          <CarFrontFill
            className="text-gray-400"
            size={24}
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>

      <Transition
        show={open}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-lg">
          {ages.map((age) => (
            <Listbox.Option
              key={age.id}
              className={({ active }) =>
                classNames(
                  active
                    ? "bg-yellow-700 text-white"
                    : "text-gray-900",
                  "relative cursor-default select-none py-2 pl-3 pr-9"
                )
              }
              value={age}
            >
              {({ selected, active }) => (
                <>
                  <div className="flex items-center">
                    <span
                      className={classNames(
                        selected
                          ? "font-semibold"
                          : "font-normal",
                        "ml-3 block truncate"
                      )}
                    >
                      {age.name}
                    </span>
                  </div>

                  {selected ? (
                    <span
                      className={classNames(
                        active ? "text-white" : "text-yellow-600",
                        "absolute inset-y-0 right-0 flex items-center pr-4"
                      )}
                    >
                      <CheckIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </>
)}
</Listbox>
<Listbox value={selectedCab} onChange={setSelectedCab}>
              {({ open }) => (
                <>
                  <div className="relative">
                    <Listbox.Button className="active:outline-yellow-700 focus:outline-yellow-700 hover:outline-yellow-700 relative w-full h-[4rem] cursor-default shadow-md rounded-lg bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none focus:ring-2 ring-gray-400 ease-in-out duration-500 focus:ring-yellow-700 text-lg">
                      <span className="ml-3 block truncate">
                        {selectedCab.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-4">
                        <CarFrontFill
                          className="text-gray-400"
                          size={24}
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-lg">
                        {cabs.map((cab) => (
                          <Listbox.Option
                            key={cab.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-yellow-700 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={cab}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {cab.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-yellow-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>