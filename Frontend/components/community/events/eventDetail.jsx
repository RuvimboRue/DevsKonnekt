import CheckoutButton from "@/components/shared/checkoutButton";
import { Calendar, LocateIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const EventDetail = ({ event, user, success, cancelled }) => {
  return (
    <div className="flex flex-col gap-8 items-start justify-between sm:flex-row w-full">
      <Image
        src={event?.imageUrl}
        alt={event?.title}
        width={1920}
        height={1080}
        className="object-cover w-full sm:w-1/2 max-h-80 rounded-lg"
      />
      <div className="w-full sm:w-1/2">
        <h1 className="text-3xl font-bold text-start mb-4">{event?.title}</h1>
        <div className="flex gap-4 items-center mb-4">
          <p className="text-lg font-medium text-secondary bg-secondary/35 p-1 rounded-full">
            {event?.price === 0 ? "Free" : `$${event?.price}.00`}
          </p>
          <p className="text-lg text-primary text-medium dark:text-background opacity-60">
            {event?.category?.name}
          </p>
          <p className="opacity-60">
            by{" "}
            <Link
              href={`/profile/${event?.organizer?.clerkId}`}
              className="text-secondary opacity-100 hover:text-primary active:text-primary visited:text-secondary/85"
            >
              {event?.organizer?.firstName} {event?.organizer?.lastName}
            </Link>
          </p>
        </div>
        <CheckoutButton
          event={event}
          userId={user?.publicMetadata?.userId}
          success={success}
          cancelled={cancelled}
        />
        <div className="flex gap-4 items-center mt-4">
          <span className="text-3xl">
            <Calendar />
          </span>
          <p className="">
            {event?.startDate}/{event?.startTime} - {event?.endDate}
          </p>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <span className="text-3xl">
            <LocateIcon />
          </span>
          <p className="">{event?.location}</p>
        </div>
        <h2 className="text-xl font-bold opacity-80 text-start mt-4">
          What You'll Learn:
        </h2>
        <p className="text-start">{event?.description}</p>
      </div>
    </div>
  );
};

export default EventDetail;
