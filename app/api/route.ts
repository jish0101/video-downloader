const getCount = () => {
  let i = 0;
  return {
    incrementCount: function () {
      return ++i;
    },
    getCount: function () {
      return i;
    },
  };
};

const counter = getCount();

export const GET = async (req: Request) => {
  try {
    const count = counter.getCount();
    return new Response(
      JSON.stringify({ message: "Hello world!", data: count })
    );
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req: Request) => {
  const count = counter.incrementCount();
  return new Response(JSON.stringify({ message: "Updated!", data: count }));
};
