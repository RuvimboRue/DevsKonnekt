"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Edit2Icon, EditIcon, PenIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import EventForm from "./eventForm";
import ConfirmEventDelete from "./confirmEventDelete";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const EventCard = ({ event, userId }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Card className="w-full sm:max-w-[450px] rounded-lg bg-background dark:bg-gray-700 shadow-sm shadow-secondary p-0 relative group">
      {userId && event.organizer._id === userId && (
        <div className="absolute top-4 right-0 z-22 flex lg:hidden lg:group-hover:flex flex-col gap-4 w-max p-2  rounded-lg">
          <Button
            variant="ghost"
            size="sm"
            onClick={(e) => {
              setShowModal(true);
            }}
            className="text-secondary :hover:text-primary"
          >
            <EditIcon className="w-8 h-8" />
          </Button>
          <ConfirmEventDelete eventId={event?.id} />
        </div>
      )}
      <Link href={`/events/${event._id}`} className="w-full h-full block">
        <CardHeader className="w-full p-0">
          <Image
            src={event?.imageUrl}
            alt={event?.title}
            width={1920}
            height={1080}
            className="object-cover w-full h-72 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="text-start px-4 py-2">
          <div className="flex justify-start items-center gap-8 mt-2 mb-4">
            <p className="text-lg font-medium text-secondary">
              {event.price === 0 ? "Free" : `$${event.price}`}
            </p>
            <p className="text-lg text-primary dark:text-background opacity-60">
              {event.category.name}
            </p>
          </div>
          <p className="text-primary dark:text-background opacity-60 mb-4">
            {format(new Date(event.startDate), "dd MMM yyyy")}
          </p>
          <h3 className="text-xl font-semibold text-start">{event.title}</h3>
          {showModal && (
            <EventForm
              data={event}
              userId={userId}
              type={"Update"}
              open={showModal}
              setOpen={setShowModal}
            />
          )}
        </CardContent>
        <CardFooter className="px-4 pb-4">
          <p className="text opacity-90 text-start">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default EventCard;
