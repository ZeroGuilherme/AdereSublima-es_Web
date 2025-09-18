import { motion, MotionProps } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface AnimatedGroupProps extends Omit<MotionProps, 'children'> {
  children?: ReactNode;
  className?: string;
  variants?: {
    container?: any;
    item?: any;
    hidden?: any;
    visible?: any;
  };
}

export const AnimatedGroup = forwardRef<HTMLDivElement, AnimatedGroupProps>(
  ({ variants, children, className, ...motionProps }, ref) => {
    // Default variants if none provided
    const defaultVariants = {
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      },
    };

    const finalVariants = variants || defaultVariants;

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate="visible"
        variants={finalVariants.container || finalVariants}
        className={className}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedGroup.displayName = 'AnimatedGroup';