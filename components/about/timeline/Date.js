export default function Date({Date, Title, Description}) {
  return (
    <div className="grid gap-1 text-sm relative">
      <div className="aspect-square w-[13px] bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
      <span className="font-medium">{ Date + ' - ' + Title }</span>
      <div className="text-muted-foreground">
        { Description }
      </div>
    </div>
  );
}
