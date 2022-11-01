import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <h1 className={cn("h1", styles.title)}>Built using</h1>
        <div className={styles.polygon}>
          <div className={styles.innerCard}>
            <img src="/images/content/card-pic-1.jpg" alt="" />
            <h3>polygon</h3>
          </div>
          <div className={styles.innerCard}>
            <img src="/images/content/card-pic-1.jpg" alt="" />
            <h3>polygon</h3>
          </div>
          <div className={styles.innerCard}>
            <img src="/images/content/card-pic-1.jpg" alt="" />
            <h3>polygon</h3>
          </div>
        </div>
        <div className={styles.wrap}>
          <div className={styles.stage}>Save your time with Stacks</div>
          <h3 className={cn("h3", styles.title2)}>
            Frequently asked questions
          </h3>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            unde eveniet commodi, quae ad doloremque
          </div>
          {/* <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/upload-variants">
              Create item
            </Link>
            <Link className={cn("button-stroke", styles.button)} to="/search01">
              Discover more
            </Link>
          </div> */}
        </div>
        <div className="container">
          <div style={{ margin: "70px 0" }}>
            <h5 className={cn("h5", styles.howork)}>How dose it work</h5>
            <div className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in
              velit ex iusto distinctio dolorem unde eius corrupti aliquid?
              Assumenda exercitationem labore voluptas ullam at? Suscipit in
              necessitatibus nostrum. Repudiandae aliquid modi reiciendis
              perferendis, eos sed, unde quaerat laboriosam distinctio ipsa
              similique itaque sit veritatis. Accusamus non minus vero fugiat?
            </div>
            <button className={cn("button-stroke button-small", styles.button)}>
              Learn more
            </button>
          </div>

          <div className={styles.accodnigPanel}>
            <div className={styles.mainTabs}>
              <div className={styles.tab} onClick={() => setIsActive(!isActive)}>
                <h5 className={cn("h5", styles.howork)}>
                  How to start with Stacks
                </h5>
                <div>{isActive ? "-" : "+"}</div>
              </div>
              {isActive && (
                <div className={styles.accordionContent}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in
                  velit ex iusto distinctio dolorem unde eius corrupti aliquid?
                  Assumenda exercitationem labore voluptas ullam at? Suscipit in
                  necessitatibus nostrum. Repudiandae aliquid modi reiciendis
                  perferendis, eos sed, unde quaerat laboriosam distinctio ipsa
                  similique itaque sit veritatis. Accusamus non minus vero fugiat?
                </div>
              )}
            </div>
            <div className={styles.mainTabs}>
              <div className={styles.tab}>
                <h5 className={cn("h5", styles.howork)}>
                  How to start with Stacks
                </h5>
                <div>{isActive ? "-" : "+"}</div>
              </div>
            </div>
            <div className={styles.mainTabs}>
              <div className={styles.tab}>
                <h5 className={cn("h5", styles.howork)}>
                  How to start with Stacks
                </h5>
                <div>{isActive ? "-" : "+"}</div>
              </div>
            </div>
            <div className={styles.mainTabs}>
              <div className={styles.tab}>
                <h5 className={cn("h5", styles.howork)}>
                  How to start with Stacks
                </h5>
                <div>{isActive ? "-" : "+"}</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cubes@2x.png 2x"
              srcSetDark="/images/content/cubes-dark@2x.png 2x"
              src="/images/content/cubes.png"
              srcDark="/images/content/cubes-dark.png"
              alt="Cubes"
            />
          </div>
          <div className={styles.preview}>
            <Image
              srcSet="/images/content/cube@2x.png 2x"
              srcSetDark="/images/content/cube-dark@2x.png 2x"
              src="/images/content/cube.png"
              srcDark="/images/content/cube-dark.png"
              alt="Cube"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Description;
