const placeholder = (req, res) => res.status(500).send(`${req.method} method not setup`);

export const handler = (
  handlerMap
) => async (req, res) => handlerMap?.[
  req.method?.toLowerCase()
]?.(req, res) || placeholder(req, res);
