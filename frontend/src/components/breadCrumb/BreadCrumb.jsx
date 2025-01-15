/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function BreadCrumb({ tab1, tab1Path, tab2, tab2Path, tab3, tab3Path }) {
  const navigate = useNavigate();

  return (
    <div className="py-6 mt-2">
      <Breadcrumb>
        <BreadcrumbList className="cursor-pointer">
          {/* First Breadcrumb Item */}
          <BreadcrumbItem>
            <BreadcrumbLink  onClick={() => navigate(tab1Path || "#")}>{tab1}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          {/* Second Breadcrumb Item */}
          <BreadcrumbItem>
            <BreadcrumbPage onClick={() => navigate(tab2Path || "#")}>
              {tab2}
            </BreadcrumbPage>
          </BreadcrumbItem>

          {/* Optional Third Breadcrumb Item */}
          {tab3 && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage >
                  {tab3}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
