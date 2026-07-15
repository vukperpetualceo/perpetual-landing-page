import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const columns = [
  { id: "dodge", label: "Dodge" },
  { id: "shovels", label: "Shovels" },
  { id: "perpetual", label: "Perpetual", highlight: true },
] as const;

type CellValue = boolean | string;

const rows: { label: string; dodge: CellValue; shovels: CellValue; perpetual: CellValue }[] = [
  {
    label: "The equipment is not yet ordered",
    dodge: true,
    shovels: false,
    perpetual: true,
  },
  {
    label: "The project is real, filed and funded",
    dodge: false,
    shovels: true,
    perpetual: true,
  },
  {
    label: "Data lands the day of filing",
    dodge: false,
    shovels: false,
    perpetual: true,
  },
  {
    label: "You can still win the job",
    dodge: false,
    shovels: false,
    perpetual: true,
  },
  {
    label: "Price",
    dodge: "$699/month",
    shovels: "$599/month",
    perpetual: "$399/month",
  },
];

const CellContent = ({
  value,
  highlight,
}: {
  value: CellValue;
  highlight?: boolean;
}) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`h-5 w-5 ${highlight ? "text-foreground" : "text-foreground/70"}`} strokeWidth={2.5} />
    ) : (
      <X className="h-5 w-5 text-muted-foreground/70" strokeWidth={2.5} />
    );
  }

  return (
    <span className={highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>
      {value}
    </span>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card relative overflow-hidden border-y border-border/70">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where <span className="text-gradient">Perpetual</span> Sits
          </h2>
          <p className="text-xl text-muted-foreground">
            Every project data vendor sells you the before or the after, but the buying window sits in between
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="w-[34%] py-5 pr-4" />
                {columns.map((column) => (
                  <th
                    key={column.id}
                    className={`w-[22%] py-5 px-4 text-base md:text-lg font-semibold ${
                      column.highlight ? "bg-secondary/60 rounded-t-xl text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <th
                    scope="row"
                    className="py-5 pr-4 align-middle text-sm md:text-base font-semibold text-foreground"
                  >
                    {row.label}
                  </th>
                  <td className="py-5 px-4 align-middle text-sm md:text-base">
                    <CellContent value={row.dodge} />
                  </td>
                  <td className="py-5 px-4 align-middle text-sm md:text-base">
                    <CellContent value={row.shovels} />
                  </td>
                  <td className="py-5 px-4 align-middle text-sm md:text-base bg-secondary/60">
                    <CellContent value={row.perpetual} highlight />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
