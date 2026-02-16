import type { NextApiRequest, NextApiResponse } from "next";

const PLACE_ID = "ChIJPRXGwsjulqgRWwNSrgAGW40";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJPRXGwsjulqgRWwNSrgAGW40&fields=reviews&language=fr&key=AIzaSyDYv1DyFBajDMo3UWBYvBpOXxn-LPH6hME`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Google API error" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}
