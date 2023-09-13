import { Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import ModalCancel from "./ModalCancel";

export default function ButttonCancel({ onPress }) {
  const [countDown, setCountDown] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown((prev) => prev - 1);
      }, 1000);
    }
  }, [countDown]);

  const handleCancel = () => {
    onPress();
  };

  return (
    <>
      <Pressable
        className="border-[#471515] border py-2 w-32 flex items-center justify-center rounded"
        onPress={() => {
          if (countDown > 0) return handleCancel();
          setIsOpen(true)
        }}
      >
        <Text className="text-[#471515]">
          Give up {countDown > 0 && `(${countDown})`}
        </Text>
      </Pressable>

      <ModalCancel
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onCancel={handleCancel}
      />
    </>
  );
}
